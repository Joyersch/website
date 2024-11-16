<script>
    import { menu } from "../stores.js";
    let menuState = "about";
    function changeMenu(newMenu) {
        menuState = newMenu;
        menu.set(newMenu);
    }
</script>

<header>
    <div class="flex flex-row justify-between">
        <div class="filex flex-col">
            <h1 class="text-4xl ml-4 font-boldmt-4">Hello :3</h1>
            <h2 class="text-1xl ml-4">How did you get here?</h2>
        </div>
    </div>
    <div class="mt-1">
        <div class="flex justify-center space-x-4">
            <button
                class="flex flex-col items-center p-2 cursor-pointer transition"
                class:text-neya_main={menuState === "about"}
                class:text-neya_second={menuState !== "about"}
                on:click={() => changeMenu("about")}
            >
                <span>About</span>
            </button>

            <button
                class="flex flex-col items-center p-2 cursor-pointer transition"
                on:click={() => changeMenu("projects")}
                class:text-neya_main={menuState === "projects"}
                class:text-neya_second={menuState !== "projects"}
            >
                <span>Projects</span>
            </button>

            <button
                class="flex flex-col items-center p-2 cursor-pointer transition"
                on:click={() => changeMenu("archive")}
                class:text-neya_main={menuState === "archive"}
                class:text-neya_second={menuState !== "archive"}
            >
                <span>Archive</span>
            </button>
        </div>
    </div>
</header>
