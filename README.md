I uploaded a new file because I have made a lot of changes.
My only issue is that I cannot get the header titles to work for the subCategories when you click
on the circle buttons at the top of each screen.

Example: If you click on Dining, then click on Dining 1, it will currently have Dining in the header.
I would like it to have a header title that is the same as the circle button for each icon in each sub-category.
(In this case Dining 1, currently shown below the banner).

I created a JSON file for each sub-category that lists the circle buttons and data to pass.
If you go to data.business-data you'll find this code beginning at line50 with Dining (CATEGORIESINFODINING).
These new files are linked to the categoryInfoData you added beginning on line 373.
I'm not sure if this is the best way to do things, but it does seem to work for all my needs except header title.

The header title is created in InfoDetailScreenCategories.js lines 9-15. 
Note: The code shown is copied from another screen. I know it will not display the correct JSON for these header titles.

Note that their are two different titles. The first one is used for the circle button where I can add a line break
if needed (named infoTitle in models.homeInfoBubbles). The second one is used for the header title
(named: infoTitle2 in models.homeInfoBubbles).

Thanks for your help. I am slowly learning.
