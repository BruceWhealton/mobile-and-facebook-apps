mobile-and-facebook-apps
========================

Applications for facebook and for mobile web apps

Outline of Projects

New:

Task Request:

The next request is broken down into a few items.

           1) Can you propose a set of vocabularies to use for describing community resources?   I think if it is possible to use schema.org and the vocabularies that are associated with schema.org that would be good.   For example, in that tutorial you sent to me for resumes, the person detailed the benefits of schema.org - that's when I discovered historical-data.org which has a bearing on a genealogy project.   What is the correct way to describe this, that historical-data.org is an extension of schema.org?      Note: This is an example, as historical-data.org would apply to the Genealogy application but not to  the “Community Resources” application.
           2) If it isn't possible to use RDFa and microcode, it is possible to create an RDFa page from a RDF/XML file.   The result does not include any displayed content, just empty html tags with RDFa attributes.   What do you think about that?
           3) Can you create a form for me to enter information about resources for my community - I want to demonstrate this to some non-profits, including a large non-profit (a private company locally) that provides social services, funds, a homeless shelter, a food kitchen.
           4) We also, obviously need a way to display this information on a web page.
           5) And to save it as an RDF/XML file
           6) And to add it to the triple store - our-community-resources.   I guess there is no problem with the dataset having a name of our-community-resources and the domain is mycommunityresources.org... or is it hard to change the name of the dataset?


How hard will this be to do?   I'm still learning about Java/Jena and so I'm not sure.   I know that the above can be done with 6 items can be accomplished with any language and SPARQL.   However, in terms of the bigger picture, of creating a "Semantic Web App" what is the best approach for moving forward.



Next Task Request:
I almost have the ProgrammingLanguages JQuery Mobile Web app working.   The second page that shows the details has problems though.   It displays but it repeats everything several times.   I put it here: 

http://futurewaveonline.com/ProgrammingLanguages/index.html
It calls a functions in the file js/myscript.js
This is the shared host, so please ftp the content using this login info:
domain: futurewaveonline.com
user: future
pw: Flanders051358


I think it should be clear what I am trying to do or present.   The wiki link for programming language A works fine.
Thanks,
Bruce



I. JQuery Mobile web apps that use SPARQL queries, along with accompanying non-Jquery Mobile (regular web pages) pages.

	  1. Example 1: Poets by Nationality: File: PoetsByNationality.html
	  a. I want it to be able to first display a list of Nationalities from which the user can select.  Then when selecting the Nationality a list is presented of Poets by that nationality.
	  b. The application AmericanPoets.html works fine in some ways but even with this, which has over 1000 results, there should be a way to filter these results.
	  c. I had the PoetsByNationality trying to run several queries before the user selected the nationality.  How can this be addressed?  In JQuery Mobile we have several “pages” represented in one file.
	  d. How to keep track of all the ids for page elements that need to be addressed by the JavaScript code?
	  2. Technology Terms: I’d like this to be educational and I have a particular interest in this.  I would like to be able to see how different technologies related to one another, are based on others, inspired by others and etc.  For example, programming languages are often inspired by other languages, have similar characteristics and can be described with various terminology - perhaps they have a genre - e.g. functional programming, object oriented languages, etc.  These are just examples.
	  3. Current Location: http://my-family-lineage.com/mobile-and-facebook/sparql-queries/
	  4. I liked the VisualThesaurus application at http://visualthesaurus.com but I’m not exactly sure how that would work with either of the two above apps.
	  5. Notes and Comments:
	  11/16/2012: Created a JQuery Mobile app based on this: http://blog.ouseful.info/2012/07/03/mapping-how-programming-languages-influenced-each-other-according-to-wikipedia/
	  Link provided by Juri.  It is here: http://my-family-lineage.com/mobile-and-facebook/sparql-queries/ProgrammingLanguages/index.html

Presentation is not so great.  If I use data-role:listview then it is not showing language b which is influenced by language a.  Details page is throwing many errors and not displaying the details from the query.  The queries work right.


II. Genealogy Project changes to make it more user friendly... it should appear less technical to the average user...  demonstrate the benefits of the semantic web and linked data (which we do with the links on the Places - this should make it easy for users to navigate the linked data or the app should pull in data from the linked data sources). See separate fuller description later.


III. Resume/CV Application – Allow users to enter CV/Resume information, store it in RDF/XML or RDF/ttl file and the Triple Store (perhaps in Dataset MySIM) and display the results with schema.org microcode and RDFa.  Not sure if this can be mixed.

IV. FOAF application – Users enter FOAF data, it gets saved as RDF/XML or RDF/ttl file, add to same data set as III, display data on a web page.

V. Future Wave Designs – My business website – I will move it to http://futurewaveonline.com.  Drupal content to be moved there.  
	1.	 I want to use Drupal for Facebook ( I believe that is the extension, perhaps there are additional Facebook extensions ).  
	2. 	Mobile Version also, using Jquery Mobile – I think. 
	3. I'm thinking of having some kind of portal of information about technology, e.g. the semantic web, programming languages, emerging technologies, computer hardware, etc.  There was a project called Tattler based on Drupal, but it isn't maintained.  Interesting idea though.  It would present information/news/data from various sources based on chosen topics.  Google Alerts is available as a newsfeed is RSS format.  It may only be practical for a small number of terms as opposed to a broad topic area.


To be continued...
Topics to explore – what else is happening on the web relating to Genealogy and the Semantic Web, e.g. Schema.org vocabulary historical-data.org, vocab: BIO, REL.  
Are others doing things in this field like I did with my-family-lineage.com?