import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";
const error = ref(null);
const isPending = ref(false);
async function signup(email, password) {
  isPending.value = true;
  error.value = null; //reset
  // xu ly thanh cong
  try {
    const response = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!response) throw new Error("Could not create a new user.");
    return response;
  } catch (err) {
    //xu ly loi
    console.log(err);
    error.value = err.message;
  } finally {
    //xu ly reset
    isPending.value = false;
  }
}
export function useSignUp() {
  return { error, isPending, signup };
}
