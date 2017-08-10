import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | hello world', function() {
  setupComponentTest('hello-world', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#hello-world}}
    //     template content
    //   {{/hello-world}}
    // `);

    this.render(hbs`{{hello-world}}`);
    expect(this.$()).to.have.length(1);
    expect(this.$().text().trim()).to.equal('Hello');
  });
});
