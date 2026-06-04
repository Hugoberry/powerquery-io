---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Επιστρέφει το τέλος της εβδομάδας.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Returns the end of the week that contains `dateTime`. This function takes an optional `Day`, `firstDayOfWeek`, to set as the first day of the week for this relative calculation. The default value is `Day.Sunday`.

-   `dateTime`: A `date`, `datetime`, or `datetimezone` value from which the last day of the week is calculated
-   `firstDayOfWeek`: *(Optional)* A `Day.Type` value representing the first day of the week. Possible values are `Day.Sunday`, `Day.Monday`, `Day.Tuesday`, `Day.Wednesday`, `Day.Thursday`, `Day.Friday` and `Day.Saturday`. The default value is `Day.Sunday`.


## Examples

### Example #1
Λάβετε το τέλος της εβδομάδας για τις 14/5/2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2
Υπολογίστε το τέλος της εβδομάδας για τις 17/5/2011 05:00:00 μ.μ. -7:00, με την Κυριακή (προεπιλογή) να είναι η πρώτη ημέρα της εβδομάδας.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
