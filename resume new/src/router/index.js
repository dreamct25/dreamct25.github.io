import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Main.vue'
import Calculater from '../components/Calculater.vue'
import Canvas from '../components/Canvas.vue'
import Clock from '../components/Clock.vue'
import ImageControler from '../components/ImageControler.vue'
import Memory from '../components/Memory.vue'
import Mind from '../components/Mind.vue'
import Music from '../components/Music.vue'
import Player from '../components/Player.vue'
import Puzzle from '../components/Puzzle.vue'
import ToDoList from '../components/ToDoList.vue'
import Travel from '../components/Travel.vue'
import Weather from '../components/Weather.vue'
import Weight from '../components/Weight.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  children: [{
    path: 'calculater',
    name: 'calculater',
    component: Calculater
  }, {
    path: 'canvas',
    name: 'canvas',
    component: Canvas
  }, {
    path: 'clock',
    name: 'clock',
    component: Clock
  }, {
    path: 'imagecontroler',
    name: 'imagecontroler',
    component: ImageControler
  }, {
    path: 'memory',
    name: 'memory',
    component: Memory
  }, {
    path: 'mind',
    name: 'mind',
    component: Mind
  }, {
    path: 'music',
    name: 'music',
    component: Music
  }, {
    path: 'player',
    name: 'player',
    component: Player
  }, {
    path: 'puzzle',
    name: 'puzzle',
    component: Puzzle
  }, {
    path: 'todolist',
    name: 'todolist',
    component: ToDoList
  }, {
    path: 'travel',
    name: 'travel',
    component: Travel
  }, {
    path: 'weather',
    name: 'weather',
    component: Weather
  }, {
    path: 'weight',
    name: 'weight',
    component: Weight
  }]
}]

const router = new VueRouter({
  routes
})

export default router