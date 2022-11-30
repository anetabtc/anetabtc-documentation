---
sidebar_label: 'Sécurité'
sidebar_position: 2
---

Une partie principale du protocole consistera à utiliser des coffres-forts.

Les coffres-forts ne sont pas fiables et collatéraux et tout utilisateur peut devenir un coffre-fort en fournissant des garanties. Cela signifie qu’en tant qu’utilisateur, vous pouvez choisir librement n’importe quel coffre-fort que vous aimez ou être votre propre coffre-fort. Vous n’avez pas besoin de faire confiance à quelqu’un d’autre si vous voulez être très prudent.

Le comportement correct des coffres-forts est appliqué par le pont. Plus précisément, les coffres-forts doivent prouver le comportement correct du composant BTC-Relay - un client Bitcoin SPV implémenté directement sur le pont. Si un coffre-fort tente de voler BTC, cela sera automatiquement détecté et le coffre-fort perdra sa garantie - et les utilisateurs seront remboursés en utilisant cette garantie à un taux avantageux car les coffres-forts sont sursaccédéés dès le début.

La responsabilité secondaire d’un coffre-fort est de surveiller à la fois Bitcoin et le pont pour s’assurer que le BTC-Relay reste à jour avec la chaîne principale Bitcoin en relayant les en-têtes de bloc Bitcoin. BTC-Relay est auto-réparateur et détecte et récupère automatiquement les forks Bitcoin.

Pour émettre anetaBTC, l’utilisateur devra payer un dépôt de garantie en ERG, d’où la raison pour laquelle le coffre-fort envoie des garanties ERG verrouillées au  pont anetaBTC. Il s’agit d’une mesure de sécurité visant à encourager une activité réelle et à prévenir le chagrin des coffres-forts. Le dépôt de garantie ERG sera remis à l’utilisateur pour les transactions terminées.

<!-- Source: xchain whitepaper  -->
