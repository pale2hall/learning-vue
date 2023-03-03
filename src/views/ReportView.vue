<template>
    <div class="report">
      <h3>Report</h3>
     <page-heading title="Report" desc="Use the tools below to generate and browse your report."></page-heading>

     <ui-card title="sample card" content="this is content?"></ui-card>
     <ui-link href="https://tboltusa.com" text="tbolt" rel="_nofollow" target="_blank"></ui-link>
     <user-status></user-status>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  import PageHeading from '@/components/page-heading.vue';
  import UiCard from '@/components/ui-card.vue';
  import UiLink from '@/components/ui-link.vue';
  import UserStatus from '@/components/user-status.vue';
  
  export default {
    name: 'HomeView',
      components: {
        PageHeading,
        UiCard,
        UiLink,
        UserStatus,
    }
  }
  </script>
  