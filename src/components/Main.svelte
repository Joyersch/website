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

<main>
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
