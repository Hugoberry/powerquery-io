---
title: MariaDB.Contents
---

# MariaDB.Contents



## Syntax

```powerquery
MariaDB.Contents(
    MariaDB Data Source as text,
    optional database as text,
    optional CreateNavigationProperties as logical
) as table
```


## Remarks

Returns a navigation table.<br />        <ul>        <li>Without a <code>databasename</code>, returns a table of databases on the specified MariaDB server <code>servername</code>.        </li><li>With a <code>databasename</code>, returns or a table of tables and views from the specified MariaDB database <code>databasename</code> on the server <code>servername</code>.        </li></ul>                <code>databasename</code> can be provided in either of the input parameters:<br />        <ul>        <li>In the <b>MariaDB Data Source</b> string after a semicolon. This approach allows using database-specific credentials. See details below.        </li><li>As the optional <b>Database</b> parameter. This approach allows using same credentials for all databases on the specified server <code>servername</code>.        </li></ul>        The <b>MariaDB Data Source</b> string uniquely identifies a data source in Power BI and allows using different credentials for each data source.        Credentials for a data source are configured in Power BI <i>Data source settings</i> screen.         MariaDB Power BI connector supports Basic authentication per server or per database.        E.g. it is possible to connect with different credentials to databases residing on the same MariaDB server.<br />                <code>CreateNavigationProperties</code> is a parameter for Odbc.DataSource.<br />        A logical value that sets whether to generate navigation properties on the returned tables. Navigation properties are based on foreign key relationships reported by the driver. These properties show up as “virtual” columns that can be expanded in the query editor, creating the appropriate join.<br />        If calculating foreign key dependencies is an expensive operation for your driver, you may want to set this value to false.<br />        Default: TRUE<br />


## Examples

### Example #1 
Returns a table of MariaDB tables and views functions from the MariaDB database &lt;code&gt;databasename&lt;/code&gt; on server &lt;code&gt;servername&lt;/code&gt;.
```powerquery
MariaDB.Contents("servername", "databasename")
```

Result: 
```powerquery
#table({"Name", "Description", "Data", "Kind"}, {
       {"airlines", null, #table(...), "Table"},
       {"airports", null, #table(...), "Table"},
       {"flights", null, #table(...), "Table"}
       })
```


### Example #2 
Returns a table of databases on the specified MariaDB server using the default port 3306 to connect. Equivalent to &lt;code&gt;MariaDB.Contents(&#34;servername:3306&#34;)&lt;/code&gt;.
```powerquery
MariaDB.Contents("servername")
```

Result: 
```powerquery
#table({"Name", "Description", "Data", "Kind"}, {
       {"mysql", null, #table(...), "Database"},
       {"flights", null, #table(...), "Database"}
       })
```


### Example #3 
Returns a table of databases on the specified MariaDB server &lt;code&gt;servername&lt;/code&gt; using the provided port number &lt;code&gt;portnumber&lt;/code&gt; to connect.
```powerquery
MariaDB.Contents("servername:portnumber")
```

Result: 
```powerquery
#table({"Name", "Description", "Data", "Kind"}, {
       {"mysql", null, #table(...), "Database"},
       {"flights", null, #table(...), "Database"}
       })
```


### Example #4 
Returns a table of MariaDB tables and views from the MariaDB database &lt;code&gt;databasename&lt;/code&gt; on server &lt;code&gt;servername&lt;/code&gt;.             The result is similar to &lt;code&gt;MariaDB.Contents(&#34;servername&#34;, &#34;databasename&#34;)&lt;/code&gt;, but the string &lt;code&gt;servername;databasename&lt;/code&gt; identifies a unique data source and allows using dedicated credentials for the database &lt;code&gt;databasename&lt;/code&gt;.
```powerquery
MariaDB.Contents("servername;databasename")
```

Result: 
```powerquery
#table({"Name", "Description", "Data", "Kind"}, {
       {"airlines", null, #table(...), "Table"},
       {"airports", null, #table(...), "Table"},
       {"flights", null, #table(...), "Table"}
       })
```



