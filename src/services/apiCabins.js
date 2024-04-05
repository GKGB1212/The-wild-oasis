import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data: cabins, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log(error);
    throw new Error("cannot get cabins");
  }
  return cabins;
}
export async function deleteCabinByID(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("cannot delete this cabin");
  }
}
export async function createCabin(cabin) {
  const imageName = `${Math.random()}-${cabin.images.name}`.replaceAll("/", "");
  const imagePath =
    supabaseUrl + "/storage/v1/object/public/cabin-images/" + imageName;

  //1, upload info of cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...cabin, images: imagePath }]);
  if (error) {
    console.log("lỗi", error);
    throw new Error("cannot create cabin");
  }

  //2, upload image cabin
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, cabin.images[0]);
  console.log("hiiiiiiiii", storageError);
  //3, Delete cabin if there was an error uploading image.
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("Cabin could not create");
  }
  return data;
}
