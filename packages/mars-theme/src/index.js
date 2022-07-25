import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";

const marsTheme = {
  name: "@frontity/mars-theme",
  roots: {
    /**
     * In Frontity, any package can add React components to the site.
     * We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      autoPrefetch: "in-view",
      menu: [],
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
      githubUserName: '',
      result: []
    },
  },

  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      fetchGithubHandler: ({ state, actions }) => {
        console.log('hello from fetch');
        // const result = await fetch(`https://api.github.com/search/users?q=${state.theme.githubUserName}`);
        fetch(`https://api.github.com/search/users?q=${state.theme.githubUserName}`)
        .then(response => {
            return response.json()
            // results = 
        }).then((actualData) => {
         //    console.log(actualData.items)
         //    setResult(actualData.items)
         state.theme.result = actualData.items;
            console.log(state.theme.result)
        })
        .catch(error => {
            console.error(error.message)
        })
      },
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [image, iframe, link],
    },
  },
};

export default marsTheme;
