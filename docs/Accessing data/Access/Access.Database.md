# Access.Database
Returns a structural representation of an Access database.
> _function (_database</code> as binary, optional _<code>_options</code> as nullable record) as table_

# Description 
Returns a structural representation of an Access database, _<code>_database</code>. An optional record parameter, _<code>_options</code>, may be specified to control the following options:
    <ul>
<li>_<code>_CreateNavigationProperties</code> : A logical (true/false) that sets whether to generate navigation properties on the returned values (default is false).</li>
<li>_<code>_NavigationPropertyNameGenerator</code> : A function that is used for the creation of names for navigation properties.</li>


    The record parameter is specified as [option1 = value1, option2 = value2...] for example.
# Category 
Accessing data
