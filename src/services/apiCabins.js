import supabase from "./supabase";

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
  const { data, error } = await supabase.from("cabins").insert([cabin]);
  if (error) {
    console.log("lỗi", error);
    throw new Error("cannot create cabin");
  }
  return data;
}
