<script lang="ts">
  import menuicon from '../images/menu.svg';
  import hddicon from '../images/hdd.svg'
</script>

<div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
    </div> 
    <div class="drawer-side" style="z-index: 30;">
      <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <div class="w-80 min-h-full bg-base-200 text-base-content">
        <img src="{hddicon}" id="hdd" class="w-[50%] mx-auto my-auto mt-5" alt="Logo">
        <p class="text-2xl m-5 text-center self-center">Odisk Utility</p>
        <div class="join join-vertical w-[100%]">
          <button class="btn btn-neutral join-item text-xl">S.M.A.R.T</button>
          <button class="btn btn-neutral join-item text-xl">Health</button>
          <button class="btn btn-neutral join-item text-xl">Backups</button>
          <button class="btn btn-neutral join-item text-xl">Archives</button>
        </div>
      </div>
    </div>
  </div>

  <label for="my-drawer" class="navbar bg-base-200 w-16 h-[100%] absolute join join-vertical" style="z-index: 20;">
    <label for="my-drawer" class="btn drawer-button">
      <img src="{menuicon}" width="16" alt="Logo">
    </label>
</label> 