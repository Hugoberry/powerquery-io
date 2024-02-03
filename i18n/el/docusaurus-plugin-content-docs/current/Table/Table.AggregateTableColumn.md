---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


## Description

Συγκεντρώνει μια στήλη πινάκων σε πολλαπλές στήλες στον πίνακα που τις περιέχει.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Details

Συγκεντρώνει πίνακες του <code>table</code>[<code>column</code>] σε πολλαπλές στήλες που περιέχουν συγκεντρωτικές τιμές για τους πίνακες. Η <code>aggregations</code> χρησιμοποιείται για να καθορίσει τους πίνακες για συγκέντρωση, τις συναρτήσεις συγκέντρωσης που θα εφαρμοστούν στους πίνακες για να δημιουργήσουν τις τιμές τους και τα ονόματα των συγκεντρωτικών στηλών που θα δημιουργηθούν.


## Examples

### Example #1 
Συγκεντρώστε στήλες πίνακα στην &lt;code&gt;[t]&lt;/code&gt; στον πίνακα &lt;code&gt;\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}&lt;/code&gt; με το άθροισμα στην &lt;code&gt;[t.a]&lt;/code&gt;, το μέγιστο και το ελάχιστο στην &lt;code&gt;[t.b]&lt;/code&gt; και το πλήθος των τιμών στην &lt;code&gt;[t.a]&lt;/code&gt;.
```powerquery
Table.AggregateTableColumn(
    Table.FromRecords(
        {
            [
                t = Table.FromRecords({
                    [a = 1, b = 2, c = 3],
                    [a = 2, b = 4, c = 6]
                }),
                b = 2
            ]
        },
        type table [t = table [a = number, b = number, c = number], b = number]
    ),
    "t",
    {
        {"a", List.Sum, "sum of t.a"},
        {"b", List.Min, "min of t.b"},
        {"b", List.Max, "max of t.b"},
        {"a", List.Count, "count of t.a"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[#"sum of t.a" = 3, #"min of t.b" = 2, #"max of t.b" = 4, #"count of t.a" = 2, b = 2]})
```




## Category
Table.Transformation
