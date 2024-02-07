---
title: TeamDesk.SelectView
---

# TeamDesk.SelectView



## Syntax

```powerquery
TeamDesk.SelectView(
    url as Uri.Type,
    optional table as text,
    optional view as text,
    optional filter as text
) as table
```


## Remarks

Retrieves the data from provided table and view. You can also apply an additional filter for results.


## Examples

### Example #1 
Retrieve all meetings from List All view
```powerquery
TeamDesk.SelectView("https://www.teamdesk.net/secure/db/57692", "Meeting", "List All")
```

Result: 
```powerquery
#table(
	{ "Starter", "Start Date", "Participants" },
	{
		{ ""Joe"", #date(2018, 10, 12), 10 },
		// ...
	}
)
```


### Example #2 
Retrieve today&#39;s meetings from List All view
```powerquery
TeamDesk.SelectView("https://www.teamdesk.net/secure/db/57692", "Meeting", "List All", "[Start Date] = Today()")
```

Result: 
```powerquery
#table(
	{ "Starter", "Start Date", "Participants" },
	{
		{ ""Joe"", #date(2018, 10, 12), 10 },
		// ...
	}
)
```



