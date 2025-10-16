<script lang="ts">
  import PersonalInfo from "./lib/PersonalInfo.svelte";
  import Projects from "./lib/Projects.svelte";
</script>

<div class="flex flex-1 flex-col items-center p-1">
  <div class="flex flex-1 flex-col items-start styled-border styled-card">
    <PersonalInfo />
    <span class="styled colored-text"><strong>projects:</strong></span>
    <div>
      <Projects />
    </div>
  </div>
</div>
