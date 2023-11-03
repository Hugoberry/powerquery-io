param(
    [int]$port = 666, # Default port value
    [string]$outputJsonFile = "output.json" # Default output file
)

# Import necessary modules
Import-Module SqlServer

# Construct Analysis Services instance address
$asInstance = "localhost:$port"

# Invoke the command and expect the result to be in XML format
$xmlResult = Invoke-ASCmd -ConnectionString $asInstance -Query "SELECT [CATALOG_NAME] FROM `$SYSTEM.DBSCHEMA_CATALOGS"

# Parse the XML result
$xml = [xml]$xmlResult

# Now extract the data you need from the XML
# You need to adjust the XPath query according to the actual structure of the XML
$dbName = $xml.return.root.row.CATALOG_NAME

# Process the database
Invoke-ProcessASDatabase -DatabaseName $dbName  -RefreshType "Full" -Server $asInstance

Write-Host "Database $dbName processed."

# Invoke Analysis Services Command to get functions data
[xml]$daxFunctionsResult = Invoke-ASCmd -Server $asInstance -Query "EVALUATE functions"

# Convert the XML result for functions into a collection of PSObjects
$functionsPsObjects = $daxFunctionsResult.return.root.row | ForEach-Object {
    [pscustomobject]@{
        Name = $_.functions_x005B_Name_x005D_
        Documentation = $_.functions_x005B_Documentation_x005D_ | ConvertFrom-Json
        ReturnType = $_.functions_x005B_ReturnType_x005D_
        Parameters = $_.functions_x005B_Parameters_x005D_ | ConvertFrom-Json
        RequiredParameters = $_.functions_x005B_RequiredParameters_x005D_
    }
}

# Invoke Analysis Services Command to get enumerations data
[xml]$daxEnumerationsResult = Invoke-ASCmd -Server $asInstance -Query "EVALUATE enumerations"

# Convert the XML result for enumerations into a collection of PSObjects
$enumerationsPsObjects = $daxEnumerationsResult.return.root.row | ForEach-Object {
    $psObject = [pscustomobject]@{
        Name = $_.enumerations_x005B_Name_x005D_
        Documentation = $_.enumerations_x005B_Documentation_x005D_ | ConvertFrom-Json
    }
    # Ignore if Name is not equal to Documentation 'Documentation.Name'
    if ($psObject.Name -ne $psObject.Documentation.'Documentation.Name') {
        return $null
    }
    return $psObject
} | Where-Object { $_ -ne $null } # Filter out the $nulls immediately

# Combine both objects into a single PSObject with two properties: functions and enumerations
$outputObject = [pscustomobject]@{
    functions = $functionsPsObjects
    enumerations = $enumerationsPsObjects
}

# Convert the combined object to JSON and save to the specified file
$outputObject | ConvertTo-Json -Depth 10 | Out-File $outputJsonFile
