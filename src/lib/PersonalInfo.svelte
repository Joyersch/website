<script>
    import { getMonths, getYears } from "./AgeCalculation";

    const socials = [
        {
            href: "https://github.com/Joyersch",
            label: "github",
            tooltip: "Github",
        },
        {
            href: "https://joyersch.itch.io/",
            label: "itch.io",
            tooltip: "Itch.io",
        },
        {
            href: "https://www.linkedin.com/in/joy-7ejnma/",
            label: "linkedin",
            tooltip: "LinkedIn",
        },
    ];

    const name = "joy";
    const pronouns = "she/her";
    const birthDate = "2001-08-30";
    const devSince = "2023-08-09";
</script>

<div>
    <div class="flex flex-col items-start">
        <span class="styled colored">
            <span class=" name"> <strong>name:</strong></span>
            {name} (<span class="styled pronouns">{pronouns}</span>)
        </span>

        <span class="styled colored">
            <span class="age"><strong>age:</strong></span>
            {getYears(birthDate)} y/o
        </span>

        <span class="styled colored">
            <span class="develop"><strong>developer for:</strong></span>
            {getYears(devSince)} years {getMonths(devSince)} months
        </span>
    </div>

    <div class="flex gap-2">
        <span class="styled links"><strong>links: </strong></span>
        {#each socials as { href, label, tooltip }}
            <a
                {href}
                target="_blank"
                rel="noopener noreferrer"
                class="styled link"
                aria-label={label}
                title={tooltip}
            >
                <span>{label}</span>
            </a>
        {/each}
    </div>
</div>
