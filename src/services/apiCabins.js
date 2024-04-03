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
  alert("hi everyone");
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("cannot delete this cabin");
  }
}
