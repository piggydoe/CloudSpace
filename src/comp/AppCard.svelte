<script>
    import { App, Page, Navbar, Block, Toolbar, Link, Button, } from 'konsta/svelte';
    export let image;
    export let name;
    export let url;
    const gotoLink = (e) => {
        e.preventDefault();
        window.location.href=url;
    }
</script>

    <Block outlineIos class="flex my-0 py-4">
        <img class="w-[64px] h-[64px] rounded-xl" alt="" src={image} />
        <div class="flex flex-col">
            <h1 class="ml-4 text-lg font-bold">{name}</h1>
            <p class="ml-4 mt-1">In-App purchases</p>
        </div>
        <div class="flex-1"></div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={gotoLink} class="items-center flex">
            <Button class="w-[60px] h-[24px]" rounded>get</Button>
        </div>
    </Block>