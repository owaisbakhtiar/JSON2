I uploaded a new file because I have made a lot of changes.
My only issue is that I cannot get the header titles to work for the subCategories when you click
on the circle buttons at the top of each screen.

Example: If you click on Dining, then click on Dining 1, it will say Dining in the header.
I would like it to pass through the title of the circle button (In this case Dining 1 that is shown below the banner).

To make this work, I had to seperate the circle buttons used on the home screen from the ones used in the sub-category screens.
If you go to data.business-data you'll find this code beginning at line50 with Dining (CATEGORIESINFODINING).
These new files are linked to the categoryInfoData you added beginning on line 373.

Note that their are two different titles. The first on is used for the circle button where I can add a line break
if needed (named: infoTitle in models.homeInfoBubbles). The second one is used for the header title
(named: infoTitle2 in models.homeInfoBubbles).

Thanks for any help.
