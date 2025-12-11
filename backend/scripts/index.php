<!DOCTYPE html>
<html lang="en">
<head>
    <title>API Endpoint</title>
</head>
<body>
    <h1>Welcome to the API Endpoint</h1>
    <p>
        <?php 
        require 'db/connection.php';

        echo "If the API is working, you should see the output of it fetching data from all of the tables in the tadreeb_sis database.<br><br>";

        try {
            $tablesResult = $pdo->query("SHOW TABLES");

            if ($tablesResult->rowCount() > 0) {
                while ($tableRow = $tablesResult->fetch(PDO::FETCH_NUM)) {
                    $tableName = $tableRow[0]; 

                    echo "<h3>Table: $tableName</h3>";

                    $dataResult = $pdo->query("SELECT * FROM `$tableName` LIMIT 10");
                    $rows = $dataResult->fetchAll(PDO::FETCH_ASSOC);

                    if (count($rows) > 0) {
                        echo "<pre>";
                        print_r($rows);
                        echo "</pre>";
                    } else {
                        echo "No data in this table.<br>";
                    }
                }
            } else {
                echo "No tables found in the database.";
            }

        } catch (PDOException $e) {
            echo "Query failed: " . $e->getMessage();
        }
        ?>
    </p>
</body>
</html>
