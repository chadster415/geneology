# geneology
Armstrong/Murphy Neo4j Graph Visualization

- Installing Neo4j on AWS:
--------------------------
```
wget https://neo4j.com/artifact.php?name=neo4j-community-3.3.3-unix.tar.gz
mv "artifact.php?name=neo4j-community-3.3.3-unix.tar.gz" neo4j-community-3.3.3-unix.tar.gz
tar xvf neo4j-community-3.3.3-unix.tar.gz
sudo mv neo4j-community-3.3.3 /usr/local/neo4j
which neo4j
cd neo4j
cd /usr/local/neo4j
vi ./conf/neo4j.conf
# add the line: org.neo4j.server.webserver.address=0.0.0.0
# install java
# sudo ./bin/neo4j start # fails- no java
sudo add-apt-repository ppa:openjdk-r/ppa
sudo apt-get update
sudo apt-get install openjdk-8-jdk
java -version
sudo ./bin/neo4j start
# success!
```

- Original geneology docs are in data/docs
- The normalized csv file created from the unstructured data docs is in data/Geneology.csv
- The Jupyter notebook with the code to iterate the csv and insert into neo4j is at csv_to_neo4j.ipynb
- Cypher files are at data/cypher for the kind of queries I was experienting with
- The node project is included in order to visualize the contents of the neo4j database. This includes the bolt javascript library


- Starting the node project on EC2:
-----------------------------------
```
# cd geneology/
# screen -r
# node server.js
# [Ctrl-A Ctrl-D]
# exit
```

- Screenshots are at screenshots/