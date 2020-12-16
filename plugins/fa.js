import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons'
import {
  faArrowLeft,
  faArrowRight,
  faQuestion,
  faList,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faTwitter,
  faGithub,
  faLinkedin,
  faArrowLeft,
  faArrowRight,
  faQuestion,
  faList,
  faSearch,
  faDiscord
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
