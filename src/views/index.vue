<template>
  <div class="home">Sheet</div>
  <div class="mt-6">{{ user.displayName }}</div>
</template>

<script>
import { useUser } from "@/composables/useUser";
export default {
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();

    return { user };
  },
};
</script>
