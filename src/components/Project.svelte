<script>
    export let project;
</script>

<div class="mb-5 mt-5">
    <div class="text-2xl">{project.name}</div>
    <div class="text-neya_second mb-2">{project.description}</div>
    {#each project.img as img}
        <div class="pt-1 pb-1">
            <img src={img} alt="{project.name} image" class="rounded-2xl" />
        </div>
    {/each}
    <div class="flex flex-start mt-2">
        {#each project.technologies as technologies}
            <div
                class="ml-1 mr-1 rounded-xl p-1"
                style="background-color: {technologies.bgcolor}; color: {technologies.color}"
            >
                <p>
                    {technologies.text}
                </p>
            </div>
        {/each}
    </div>
    <div class="flex flex-start mt-2">
        {#each project.links as link}
            <div class="ml-1 mr-1">
                <a class="hover:text-neya_second" href={link.href}>
                    {link.text}
                </a>
            </div>
        {/each}
    </div>
</div>
