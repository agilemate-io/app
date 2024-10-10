<template>
  <v-card tile flat color="application" height="100%">
    <v-row justify="center">
      <v-col v-if="$vuetify.display.mdAndUp" align="center" cols="12" class="mt-8">
        <v-img height="150" src="@/assets/logo.png" />
        <v-img image="assets/logo.png" />
        <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>
        <div class="text-h3 font-weight-bold">Agilemate</div>
      </v-col>
      <template v-for="module in modules">
        <v-col v-if="module.enabled" :key="module.id" cols="12" lg="3" md="4" sm="6">
          <v-card class="py-4" :disabled="!module.enabled" height="100%" max-width="500" hover
            :subtitle="module.description" :title="module.title" :href="module.link" color="#00000033" theme="dark">
            <template #prepend>
              <v-icon color="info" :icon="module.icon" size="50" />
            </template>
            <div v-for="(feature, fidx) of module.features" :key="fidx" class="mx-7">
              <v-icon class="mr-1" color="amber" size="x-small" icon="mdi-star" />
              <span class="text-caption" v-text="feature" />
            </div>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
const modules = [
  {
    id: 'planning',
    title: 'Poker',
    description: 'Team estimations using Planning Poker cards',
    icon: 'mdi-cards-playing-spade-multiple',
    link: 'https://poker.agilemate.io',
    features: [
      'Unlimited sessions, participants and estimation rounds',
      'Support of most commonly used Scrum card decks',
      'Easy sharing with anonymous and authenticated participants',
      'Mobile-friendly, responsive design with live content updates',
    ],
    enabled: false,
    auth: true,
  },
  {
    id: 'retrospective',
    title: 'Retrospective',
    description: 'Virtual retrospective boards for Agile teams ',
    icon: 'mdi-ballot-recount',
    link: 'https://retro.agilemate.io',
    features: [
      'Unlimited retrospectives, cards and participants',
      'Support of most commonly used retrospective formats',
      'Easy sharing with anonymous and authenticated participants',
      'Mobile-friendly, responsive design with live content updates',
    ],
    enabled: true,
    auth: true,
  },
  {
    id: 'survey',
    title: 'Survey',
    description: 'Engaging surveys for Agile teams',
    icon: 'mdi-chart-box-outline',
    link: 'https://survey.agilemate.io',
    features: [
      'Unlimited surveys, questions and participants',
      'Support of most commonly used survey formats',
      'Easy sharing with anonymous and authenticated participants',
      'Mobile-friendly, responsive design with live content updates',
    ],
    enabled: false,
    auth: true,
  },
  {
    id: 'quiz',
    title: 'Quiz',
    description: 'Fun quizzes for Agile teams',
    icon: 'mdi-head-question-outline',
    link: 'https://quiz.agilemate.io',
    features: [
      'Unlimited quizzes, questions and participants',
      'Importing of quizzes from several well-known Quiz platforms',
      'Easy sharing with anonymous and authenticated participants',
      'Mobile-friendly, responsive design with live content updates',
    ],
    enabled: false,
    auth: true,
  },
  {
    id: 'timer',
    title: 'Timer',
    description: 'Agile timer for timeboxing team events',
    icon: 'mdi-timer',
    link: 'https://timer.agilemate.io',
    features: [
      'Publicly accessible (without authentication)',
      'Intuitive and customizable, coffee breaks support',
      'Supporting visual and audio cues for timer events',
      'Mobile-friendly, responsive design with live content updates',
    ],
    enabled: true,
    auth: false,
  },
]

</script>
