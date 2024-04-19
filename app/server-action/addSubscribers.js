"use server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import Swal from "sweetalert2";

export async function addSubscribers(formData) {
  const email = formData.get("email");
  console.log(email);

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data, error } = await supabase.from("subscribers").insert([
    {
      email,
    },
  ]);

  if (error) {
    console.error("Error inserting data", error);
    return;
  }

  revalidatePath("/");
  //  formData = "";

  Swal.fire({
    title: "Thank you for Subscribing!",
    icon: "success",
  });
  return { message: "Success" };
}
