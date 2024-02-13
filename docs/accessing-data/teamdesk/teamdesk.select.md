---
title: TeamDesk.Select
---

# TeamDesk.Select



## Syntax

```powerquery
TeamDesk.Select(
    url as Uri.Type,
    optional table as text,
    optional columns as any,
    optional filter as text,
    optional orderBy as any
) as table
```


## Remarks

Retrieves the data from select columns in provided table. You can also apply an additional filter for results as well as change the order in which records are retrieved.


## Examples

### Example #1 
Selects text and date columns
```powerquery
TeamDesk.Select("https://www.teamdesk.net/secure/db/57692", "Meeting", { "Starter", "Start Date", "Participants" })
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



