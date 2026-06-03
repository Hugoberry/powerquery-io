---
title: Web.Headers
---

# Web.Headers


Retorna os cabeçalhos HTTP baixados da URL como um valor de registro.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Remarks

Retorna os cabeçalhos baixados do `url` como um registro. Um parâmetro de registro opcional, `options`, pode ser fornecido para especificar as propriedades adicionais. O registro pode conter os seguintes campos:

-   `Query` : Adicione programaticamente parâmetros de consulta à URL sem precisar se preocupar com a saída.
-   `ApiKeyName` : Se o site de destino tiver uma noção de uma chave de API, este parâmetro poderá ser usado para especificar o nome (não o valor) do parâmetro de chave que precisa ser usado na URL. O valor da chave real é fornecido na credencial.
-   `Headers` : A especificação deste valor como um registro fornecerá cabeçalhos adicionais a uma solicitação HTTP.
-   `Timeout` : A especificação deste valor como uma duração alterará o tempo limite de uma solicitação HTTP. O valor padrão é 100 segundos.
-   `ExcludedFromCacheKey` : A especificação deste valor como uma lista excluirá essas chaves de cabeçalho HTTP de fazer parte do cálculo para o cache de dados.
-   `IsRetry` : A especificação deste valor lógico como true ignorará qualquer resposta existente no cache ao buscar dados.
-   `ManualStatusHandling` : A especificação deste valor como uma lista impedirá qualquer tratamento interno para solicitações HTTP cuja resposta tenha um desses códigos de status.
-   `RelativePath` : A especificação deste valor como texto o anexará à URL base antes de fazer a solicitação.

A solicitação HTTP é feita com o método HEAD. Fora de um contexto de conector de dados personalizado, apenas um subconjunto de cabeçalhos de resposta está disponível (por motivos de segurança).


## Examples

### Example #1
Recupere os cabeçalhos HTTP de `"https://bing.com/search?q=Power+Query"` usando as opções RelativePath e Query.
```powerquery
let
    searchText = "Power Query"
in
    Web.Headers(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
([
    #"Cache-Control" = "private, max-age=0",
    #"Content-Encoding" = "gzip",
    #"Content-Length" = "0",
    #"Content-Type" = "text/html; charset=utf-8",
    Date = "Tue, 14 Dec 2021 16:57:25 GMT",
    Expires = "Tue, 14 Dec 2021 16:56:25 GMT",
    Vary = "Accept-Encoding"
]
meta [
    Response.Status = 200
])
```




## Category
Accessing data
