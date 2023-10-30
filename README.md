# MTDOJRP Docs

### These docs can be found at [docs.mtdojrp.org](https://docs.mtdojrp.org)
### Anyone is able to edit and add to the documentations.

### If you want to contribute to our docs by adding more information or maybe just fixing a typo do the following:
1. At the top right click "[**Fork**](https://github.com/MTDOJRP/docs/fork)", Than **Create Fork**.
2. On this fork you can now modify the pages as you please, However this will not update on the website just yet!
3. To update on the website come back to the [**original repo**](https://github.com/MTDOJRP/docs)
4. Click "[**Pull Requests**](https://github.com/MTDOJRP/docs/pulls)" and Create **New Pull Request**
5. Add a comment of what you did Ex. "Fixed There instead of Their" or 'Updated DIscord Invite link"
6. Our team will review your changed and approve or deny them, If they are denied our team will leave a comment of why.


### But wait? I've created the fork, How do I edit??
In order to edit the docs and add what you'd like to them make sure you create a fork as showed above, than go into the docs folder and find the file you want to edit, Or create a folder/file.

All Folders must contain a `category.json` file
The file will look like so:
```json
{
 "label": "Fire/Ems",
 "position": 3,
 "link": {
   "type": "generated-index",
   "description": "All the information to join SAFD!"
 }
}
```
The Label is what you want to name the category.
The position is where on the left sidebar the category will be displayed.
And the description is a brief description to display when someone clicks on the category.

Now, How do create a new file/page?
Create a file named your topic.md, Example: 10codes.md
Now at the top of the file add the following:
```md
---
sidebar_position: 2
---
```
This marks where in the sidebar under the category you want this page to display, SImply change the number.
Now write what information you would like in the file!

#### But what about the fancy formatting, images, and links?
All of these files are created using a language called "Markdown"
See a full list of markdown formatting [here](https://www.markdownguide.org/basic-syntax/)!

### Any More Questions?
Join our [**Discord**](https://mtdojrp.org/) and open a [**Ticket**](https://docs.mtdojrp.org/docs/tickets)!
