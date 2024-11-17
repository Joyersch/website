<script>
    import About from "./About.svelte";
    import Archive from "./Archive.svelte";
    import Projects from "./Projects.svelte";
    import { menu } from "../stores.js";
    let currentMenu;

    menu.subscribe((value) => {
        currentMenu = value;
    });
</script>

<hr class="border-t-4 border-neya_eyes_darkened my-4" />
<main class="mt-3">
    <div class="container mx-auto">
        {#if currentMenu === "projects"}
            <Projects />
        {:else if currentMenu === "archive"}
            <Archive />
        {:else}
            <About />
        {/if}
    </div>
</main>
