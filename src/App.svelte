
<script>
  import { App, Page, Navbar, Block, Toolbar, Link, Button, Card, } from 'konsta/svelte';
  import { onMount } from 'svelte';
  import AppCard from './comp/AppCard.svelte';

  let apps = [
    {
      name: "App Installer",
      description: "",
      image: "https://paradise.getzeus.app/icons/App_Installer/icon.png?12",
      link: "https://paradise.getzeus.app/ipas/App_Installer.ipa"
    },
    {
      name: "Fortnite",
      description: "",
      image: "https://paradise.getzeus.app/icons/Fortnite/icon.png?12",
      link: "https://paradise.getzeus.app/ipas/Fortnite.ipa"
    },
    {
      name: "Instagram++",
      description: "",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png",
      link: "https://paradise.getzeus.app/ipas/Instagram%2B%2B.ipa"
    },
    {
      name: "Youtube++",
      description: "",
      image: "https://icons-for-free.com/download-icon-app+global+ios+media+social+youtube+icon-1320193331371761915_512.png",
      link: "https://paradise.getzeus.app/ipas/Youtube%2B%2B.ipa"
    },
    {
      name: "Flappy Bird",
      description: "",
      image: "https://paradise.getzeus.app/icons/FlappyBird/icon.png?12",
      link: "https://paradise.getzeus.app/ipas/FlappyBird.ipa"
    },
    {
      name: "Instagram++",
      description: "",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png",
      link: "https://paradise.getzeus.app/ipas/Instagram++.ipa"
    },
    {
      name: "Kik++",
      description: "",
      image: "https://paradise.getzeus.app/icons/Kik++/icon.png?12",
      link: "https://paradise.getzeus.app/ipas/Kik++.ipa"
    },
    {
      name: "Minecraft Lite",
      description: "",
      image: "https://www.androidp1.com/uploads/posts/2021-08/1629715833_minecraft-pocket-edition.webp",
      link: "https://paradise.getzeus.app/ipas/Minecraft_Lite.ipa"
    },
    {
      name: "Spotify++",
      description: "",
      image: "https://paradise.getzeus.app/icons/Spotify++/icon.png?12",
      link: "https://paradise.getzeus.app/ipas/Spotify++.ipa"
    },
    {
      name: "Tinder++",
      description: "",
      image: "https://paradise.getzeus.app/icons/Tinder++/icon.png?12",
      link: "https://paradise.getzeus.app/ipas/Tinder++.ipa"
    },
    {
      name: "YoutubeMusic++",
      description: "",
      image: "https://play-lh.googleusercontent.com/GnYnNfKBr2nysHBYgYRCQtcv_RRNN0Sosn47F5ArKJu89DMR3_jHRAazoIVsPUoaMg=w240-h480-rw",
      link: "https://paradise.getzeus.app/ipas/YTMusic++.ipa"
    },
    {
      name: "WhatsApp++",
      description: "",
      image: "https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN",
      link: "https://paradise.getzeus.app/ipas/WhatsApp++.ipa"
    },
    {
      name: "Youtube++",
      description: "",
      image: "https://yt3.googleusercontent.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s900-c-k-c0x00ffffff-no-rj",
      link: "https://paradise.getzeus.app/ipas/Youtube++.ipa"
    }
  ];

</script>
<App theme="ios" safeAreas>
  <Page>
    <Navbar title="CloudSpace" />

    <Block>
      <Card class="flex justify-center">
        <img alt="" class="w-[512px] rounded-3xl" src="https://cloudspace-cloud9.netlify.app/logo.jpeg"/>
      </Card>
    </Block>

    <Toolbar
    top=false
    class= 'left-0 bottom-0 fixed'
    >
    <Link toolbar>App Library</Link>
    <Link toolbar>IPA Library</Link>
    <Link toolbar>Download App</Link>
  </Toolbar>

  <div class="my-0">

      {#each apps as apps}
        <AppCard url={apps.url} name={apps.name} image={apps.image}/>
      {/each}
    
  </div>

  </Page>
</App>