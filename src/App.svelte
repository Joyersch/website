<script lang="ts">
  import PersonalInfo from "./lib/PersonalInfo.svelte";
  import Projects from "./lib/Projects.svelte";
</script>

<div class="flex flex-1 flex-col items-center p-1">
  <div class="flex flex-1 flex-col items-start">
    <!-- svelte-ignore a11y_missing_attribute -->
    <img src="fish.png" />
    <PersonalInfo />
  </div>
</div>
