import { createElement } from 'lwc';
import WireJest from 'c/wireJest';
import { registerApexTestWireAdapter } from '@salesforce/sfdx-lwc-jest';
import getCon from '@salesforce/apex/contactDataHandler.contacts';

const getConAdapter = registerApexTestWireAdapter(getCon);

describe('c-wire-jest', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single test run,
        // it's important to reset the DOM to a clean state.
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
        // Prevent data saved on mocks from leaking between tests
        jest.clearAllMocks();
    });

    it('renders contact data', () => {
        const element = createElement('c-wire-jest', {
            is: WireJest
        });
        document.body.appendChild(element);

        // Emit data from Apex
        getConAdapter.emit([
            {
                Id: '1',
                Name: 'John Doe'
            },
            {
                Id: '2',
                Name: 'Jane Smith'
            }
        ]);

        return Promise.resolve().then(() => {
            // Select elements for validation
            const card = element.shadowRoot.querySelector('lightning-card');
            const paragraphs = element.shadowRoot.querySelectorAll('p');

            // Validate data rendering 
            expect(card).not.toBeNull();
            expect(paragraphs.length).toBe(2);
            expect(paragraphs[0].textContent).toBe('John Doe');
            expect(paragraphs[1].textContent).toBe('Jane Smith');
        });
    });
});
