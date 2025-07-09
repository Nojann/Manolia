import Source from '../Source.vue'
import Application from '../../views/Application.vue'
import Header from '../Header.vue'
import '/src/assets/base.css'
import '/src/assets/main.css'

describe('Source.vue', () => {
  it('renders the form and submits correctly', () => {
    cy.mount(Application)

    cy.viewport(1600, 1080)

    for(let i=0; i<10; i++){
      cy.get('input[name="creator"]').type('John Doe')
      cy.get('input[name="date"]').type('2000')
      cy.get('input[name="title"]').type('Lorem')
      cy.get('textarea').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a malesuada risus. Morbi molestie a velit vel egestas. Etiam dictum venenatis viverra. Sed dapibus dictum urna id interdum. Quisque felis magna, posuere ac finibus id, consectetur sed odio. Ut molestie magna dui, in faucibus dolor pulvinar euismod. Morbi vel ante a lorem sagittis egestas. Proin nulla tellus, pellentesque sit amet nisi at, euismod feugiat felis. Donec ut dui nibh. Integer rhoncus leo sed nisi ornare posuere.')

      cy.get('input[type=submit]').click()
    }

    })
})
