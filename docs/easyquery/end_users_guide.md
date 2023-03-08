## 1. EasyQuery: What’s That?
The majority of software products or web applications work with databases in some way. Usually, every such program (or application) contains an option of data search and/or filtering.

It is always good when there are just a few search parameters, and when one can perform a query with a single text line (for example, Google search). Nevertheless, in most cases, you need to conduct a search while operating several parameters at the same time. For example, “Find all orders for product A made by USA companies, which have been both paid for and shipped by the beginning of the current month.” To specify indicate the conditions of such a query, you will need more than one text line.

In such cases, EasyQuery would be much of help. It is a universal query builder UI for data search and filtering. It will allow you setting the search conditions of almost any difficulty while using exclusively natural language, terms, and expressions of which are familiar to user.

## 2. EasyQuery Components.

The EasyQuery user interface consists of three main components – an Entities Panel, Conditions Panel, and Columns Panel. Data will be displayed in the Results Panel. The picture below can help you understand which is what.

![Image](/images/eq-ui-all.jpg)

_NB: SQL Panel is not a component of the EasyQuery UI. It is displayed here exclusively to demonstrate what a particular query would look like in SQL (Structured Query Language). You will not normally see this panel in most applications which use EasyQuery_

Each component can be used separately. For example, it’s possible to use only Conditions Panel for data filtration while the columns are defined internally inside application.

### About entities and attributes
While working with EasyQuery, a user operates entities and their attributes. They constitute something like a structure of data that one can extract through construction of queries.

Entity is some real-world object, information on which is stored in the database. Examples of entities are as follows: ‘Customer,’ ‘Order,’ ‘Product,’ etc. Every entity has an initial set of attributes or parameters. Thus, attributes for such entity as ‘Customer’ can be: Name, Address, Country, and others.

### Entities Panel
This panel can be used as a visual representation of all entities and their attributes, which we can use to build queries. It can be used to add entity attributes to a Columns Panel (and they will be displayed in the result) or to a Conditions Panel (in order to actually set the query conditions).
You can either move selected attributes to the corresponding panels with a mouse or use buttons Add column and Add condition  (  ).

![Image](/images/eq-ui-entitiespanel.jpg)

### Columns Panel

Using columns panel you can specify the columns which you want to be displayed in your query results.

You have a list of lines, each of them represents a column in the query results (in the Results Panel). Every line consists of Expression, which is an attribute, a Title, which serves as a column title in the Results Panel, and buttons – for sorting (on the left), aggregating and deleting (on the right).

![Image](/images/eq-ui-columnspanel.jpg)

### Conditions Panel

Here you can specify filtering conditions for data selection. So the result of your query will include only the data that satisfy those conditions.

Every line in the Conditions Panel corresponds to a single query condition. Every condition consists of 3 elements – an expression (some entity attribute), an operator, and value(s) (one or more).

We have mentioned attributes above (e.g., ‘Company Name,’ ‘Product Price,’ and ‘Order Date’). Together with values, operators set certain limitations regarding data which is stored in a given attribute. For example, “(Date) is equal to 23 Jul 2014,” “(Quantity) is greater than 35,” “(Price) is less than 1,000,” and “(Name) starts with A.”

![Image](/images/eq-ui-querypanel.jpg)
