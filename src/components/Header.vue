
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>

<cv-header aria-label="Carbon header">
  <cv-skip-to-content href="#main-content">
    Skip to content
  </cv-skip-to-content>
  <cv-header-name href="javascript:void(0)" prefix="Space Optimization">
  </cv-header-name>
  <template v-slot:header-global>
    <cv-header-global-action
      aria-label="Notifications"
      aria-controls="notifications-panel"
      @click="actionNotifications"
      label="Notifications"
      tipPosition="bottom"
      tipAlignment="start"
      >
      <notification20/>
    </cv-header-global-action>
    <cv-header-global-action
      aria-label="User avatar"
      @click="actionUserAvatar"
      aria-controls="user-panel"
      label="Log in"
      tipPosition="bottom"
      tipAlignment="center"
      >
      <user-avatar20 v-if="loggedIn"/>
      <login20 v-else />
    </cv-header-global-action>
    <cv-header-global-action
      aria-label="App switcher"
      aria-controls="switcher-panel"
      @click="actionAppSwitcher"
      label="App switcher"
      tipPosition="bottom"
      tipAlignment="end"
      >
      <switcher20 />
    </cv-header-global-action>
  </template>
  <template v-slot:right-panels>
    <cv-header-panel  id="user-panel" @panel-resize="onPanelResize">
      An empty user panel
    </cv-header-panel>
    <cv-header-panel  id="notifications-panel" @panel-resize="onPanelResize">
      An empty panel
    </cv-header-panel>
    <cv-header-panel id="switcher-panel" @panel-resize="onPanelResize">
      <cv-switcher>
        <cv-switcher-item>
          <cv-switcher-item-link href="javascript:void(0)" selected>Selected app</cv-switcher-item-link>
        </cv-switcher-item>
        <cv-switcher-item>
          <cv-switcher-item-link href="javascript:void(0)">Other app</cv-switcher-item-link>
        </cv-switcher-item>
        <cv-switcher-item>
          <cv-switcher-item-link href="javascript:void(0)">Yet another app</cv-switcher-item-link>
        </cv-switcher-item>
      </cv-switcher>
    </cv-header-panel>
  </template>
</cv-header>



<div class="grayline"></div>
</template>

<style>
.grayline{
  background-color: #6A6565;
  height: 20px;
  width: 100%; 
  position: absolute; 
  top: 0; 
  left: 0;
  z-index: 1;
}
</style>