<script>
    import AboutIcon from "@material-design-icons/svg/filled/account_circle.svg";
    import ProjectsIcon from "@material-design-icons/svg/filled/folder.svg";
    import ArchiveIcon from "@material-design-icons/svg/filled/archive.svg";
    import { menu } from "../stores.js";
    function changeMenu(newMenu) {
        menu.set(newMenu);
    }
</script>

<header>
    <div class="flex justify-left">
        <h1 class="text-4xl font-bold text-gray-800 mt-4">Joyersch</h1>
    </div>
    <div>
        <div class="flex space-x-4">
            <button
                class="flex items-center gap-2 p-2 cursor-pointer hover:text-blue-500 transition"
                on:click={() => changeMenu("about")}
            >
                <img src={AboutIcon} alt="About" class="w-6 h-6" />
                <span>About</span>
            </button>

            <button
                class="flex items-center gap-2 p-2 cursor-pointer hover:text-blue-500 transition"
                on:click={() => changeMenu("projects")}
            >
                <img src={ProjectsIcon} alt="Projects" class="w-6 h-6" />
                <span>Projects</span>
            </button>

            <button
                class="flex items-center gap-2 p-2 cursor-pointer hover:text-blue-500 transition"
                on:click={() => changeMenu("archive")}
            >
                <img src={ArchiveIcon} alt="Archive" class="w-6 h-6" />
                <span>Archive</span>
            </button>
        </div>
    </div>
</header>
