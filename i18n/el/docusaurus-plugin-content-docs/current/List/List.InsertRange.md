---
title: List.InsertRange
---

# List.InsertRange


## Description

Εισαγάγει τιμές στη λίστα στο ευρετήριο στον δείκτη που δόθηκε.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Details

Επιστρέφει μια νέα λίστα που παράγεται με την εισαγωγή των τιμών της <code>values</code> στην <code>list</code> στη θέση <code>index</code>. Η πρώτη θέση στη λίστα είναι στον δείκτη 0.      <ul>        <li><code>list</code>: Η λίστα προορισμού όπου πρόκειται να εισαχθούν οι τιμές.</li>        <li><code>index</code>: Ο δείκτης της λίστας προορισμού (<code>list</code>) όπου πρόκειται να εισαχθούν οι τιμές. Η πρώτη θέση στη λίστα είναι στον δείκτη 0.</li>        <li><code>values</code>: Η λίστα των τιμών που πρόκειται να εισαχθούν στη λίστα <code>list</code>.</li>      </ul>


## Examples

### Example #1 
Εισαγάγετε τη λίστα (\{3, 4}) στη λίστα προορισμού (\{1, 2, 5}) στον δείκτη 2.
```powerquery
List.InsertRange({1, 2, 5}, 2, {3, 4})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5
}
```


### Example #2 
Εισαγάγετε μια λίστα με μια ένθετη λίστα (\{1, \{1.1, 1.2}}) σε μια λίστα προορισμού (\{2, 3, 4}) στον δείκτη 0.
```powerquery
List.InsertRange({2, 3, 4}, 0, {1, {1.1, 1.2}})
```

Result: 
```powerquery
{
    1,
    {
        1.1,
        1.2
    },
    2,
    3,
    4
}
```




## Category
List.Selection
