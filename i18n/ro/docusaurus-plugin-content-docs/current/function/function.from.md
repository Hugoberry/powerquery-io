---
title: Function.From
---

# Function.From


Creează o funcție cu o semnătură de parametru specific peste o funcție care acceptă un singur argument listă.


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Remarks

Preia o funcție unară `function` și creează o nouă funcție cu tipul `functionType` care construiește o listă din argumentele sale și o transmite la `function`.


## Examples

### Example #1
Convertește List.Sum într-o funcție cu două argumente, ale cărei argumente sunt adunate.
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2
Convertește o funcție transformând o listă într-o funcție cu două argumente.
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
