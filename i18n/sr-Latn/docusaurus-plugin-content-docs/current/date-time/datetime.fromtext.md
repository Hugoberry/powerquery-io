---
title: DateTime.FromText
---

# DateTime.FromText


Kreira datum i vremensku zonu od lokalnog i univerzalnog formata datuma i vremena.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

Kreira `datetime` vrednost iz tekstualnog prikaza, `text`. Za određivanje dodatnih svojstava može se navesti opcionalni parametar `record`, `options`. `record` može da sadrži sledeća polja:

-   `Format`: Vrednost `text` koja označava format koji treba koristiti. Za više detalja, idite na https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Izostavljanje ovog polja ili obezbeđivanje `null` rezultiraće raščlanjivanjem datuma korišćenjem najboljeg napora.
-   `Culture`: Kada `Format` nije bez vrednosti, `Culture` kontroliše neke određivače formata. Na primer, u `"en-US"` `"MMM"` je `"Jan", "Feb", "Mar", ...`, dok je u `"ru-RU"` `"MMM"` `"янв", "фев", "мар", ...`. Kada je `Format` `null`, `Culture` kontroliše podrazumevani format koji će se koristiti. Kada je `Culture` `null` ili izostavljen, koristi se `Culture.Current`.

Za podršku zastarelih tokova posla, i `options` može da bude tekstualna vrednost. Ovo ima isto ponašanje kao da je `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Konvertuj `"2010-12-31T01:30:00"` u vrednost datuma i vremena.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2
Konvertuj `"2010-12-31T01:30:00.121212"` u vrednost datuma i vremena.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3
Konvertuj `"2010-12-31T01:30:00"` u vrednost datuma i vremena.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4
Konvertuj `"20101231T013000"` u vrednost datuma i vremena.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
