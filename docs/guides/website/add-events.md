# How To Add Events

- This page provides a step-by-step walkthrough on how to add an event to the main [CCSS website](https://github.com/CarletonComputerScienceSociety/website).

  - **Step 1: Create an event markdown file**

    - Go to [content/events](https://github.com/CarletonComputerScienceSociety/website/tree/master/content/events) in the CCSS website GitHub
    - Go inside the directory for the current academic year (i.e., 2025-2026)
    - Add a new file named something like `2024-09-10-frosh-social.md`
    - Include an example frontmatter and body content:

      ```md
      ---
      title: "Frosh Social"
      date: 2024-09-10
      time: "6:00 PM"
      location: "Canal Ritz"
      preview: "images/event_posters/2024/frosh-social.jpg"
      ---

      Come meet your fellow first-years and have fun at our first social event of the year!
      ```

  - **Step 2: Add your event poster**

    - Upload your image to [static/images/event_posters](https://github.com/CarletonComputerScienceSociety/website/tree/master/static/images/event_posters) in the CCSS website GitHub
    - Recommended path/filename: `images/event_posters/2024/event-name.jpg`

  - **Step 3: Commit your changes**

    - Include both the markdown file and the image in your PR
    - Example commit message:
      `Add Frosh Social event for Sept 10`

- If there are still any questions, please feel free to reach out to your fellow execs for assistance.
