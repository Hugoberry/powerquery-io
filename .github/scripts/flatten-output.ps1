# Function to flatten the Documentation branch of the JSON
function Flatten-Documentation {
    param (
        [Parameter(Mandatory=$true)]
        [psobject]$Json,

        [Parameter(Mandatory=$true)]
        [string]$ParentKey = ''
    )

    $result = @{}

    foreach ($key in $Json.PSObject.Properties.Name) {
        $newKey = $ParentKey + $key
        $value = $Json.$key

        if ($value -is [System.Collections.IEnumerable] -and $value -isnot [string]) {
            for ($i = 0; $i -lt $value.Count; $i++) {
                $subItem = $value[$i]
                if ($subItem -is [System.Collections.IEnumerable] -and $subItem -isnot [string]) {
                    $result += Flatten-Documentation -Json $subItem -ParentKey "$newKey`_$i`_"
                } else {
                    $result["$newKey`_$i"] = @{ "message" = $subItem }
                }
            }
        } elseif ($value -is [pscustomobject]) {
            $result += Flatten-Documentation -Json $value -ParentKey "$newKey`_"
        } else {
            $result[$newKey] = @{ "message" = $value }
        }
    }

    return $result
}

# Read the JSON file
$jsonContent = Get-Content 'original.json' | ConvertFrom-Json

# Flatten the Documentation branch of each function
$flattenedJson = @{}
foreach ($function in $jsonContent.functions) {
    $documentation = $function.Documentation
    if ($documentation) {
        $flattenedJson += Flatten-Documentation -Json $documentation -ParentKey "$($function.Name)_Documentation_"
    }
}

# Convert to JSON and save to a file
$flattenedJson | ConvertTo-Json -Depth 100 | Set-Content 'flattened.json'
