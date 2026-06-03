# Source d'inventaire 

L'inventaire multi-entrepôt est l'une des fonctionnalités uniques d'ExalandStore. Nous expliquerons ici comment vous pouvez gérer l'inventaire multi-entrepôts dans Laravel eCommerce et fournir un service fiable à vos clients. 

Avoir une seule source d'inventaire peut imposer certaines restrictions pour votre boutique de commerce électronique. 

Par exemple, supposons que vous n'ayez qu'un seul inventaire à Delhi. Un client de Chennai passe une commande. La livraison de ce produit depuis Delhi peut entraîner des retards, des coûts de transport plus élevés, etc. Cependant, si vous avez un inventaire à Chennai, le produit parviendra plus rapidement au client, ce qui réduira le temps et les frais d'expédition. 

En utilisant Multi-Warehouse Inventory, vous pouvez facilement gérer toutes les sources d’inventaire. Dans ExalandStore, vous pouvez créer autant de sources d'inventaire que nécessaire et les gérer de manière transparente. 

### Étapes faciles pour gérer l'inventaire dans ExalandStore 

**Étape 1 :** Dans le panneau d'administration d'ExalandStore, accédez à **Paramètres >> Sources d'inventaire >> Créer une source d'inventaire** comme indiqué ci-dessous. 

<ImagePopup src="/images/settings/inventorySource.png" alt="Inventory Source" /> 

**Étape 2 : Général** 
Entrez le **Code, le Nom, la Description, la Latitude, la Longitude et la Priorité**, et définissez le **Statut** comme actif. 

<ImagePopup src="/images/settings/inventoryConfiguration.png" alt="Inventory Configuration" /> 

**Étape 3 : Coordonnées** 
Saisissez **Nom, e-mail, fax et numéro de contact**. 

<ImagePopup src="/images/settings/contactInfo.png" alt="Contact Information" /> 

**Étape 4 : Adresse source** 
Saisissez les détails de l'adresse source tels que le pays, l'adresse, l'état et la ville. 

<ImagePopup src="/images/settings/sourceAddress.png" alt="Source Address" /> 

Après cela, cliquez sur **Enregistrer la source d'inventaire**. Vous verrez maintenant la source d'inventaire nouvellement créée, comme indiqué ci-dessous. 

<ImagePopup src="/images/settings/inventoryOutput.png" alt="Inventory Output" /> 

**Étape 5 :** Accédez à **Paramètres >> Chaînes**. Ouvrez le canal sélectionné dans **Mode Édition >> Sources d'inventaire**. Il s'agit d'un champ à sélection multiple dans lequel vous pouvez sélectionner plusieurs sources d'inventaire pour vos chaînes. Après cela, cliquez sur **Enregistrer la chaîne**. 

### Paramètres d'inventaire sur la page produit 

Accédez au **Catalogue >> Produits**. Ouvrez le produit sélectionné en **Mode Édition** et saisissez la **quantité** pour chaque source d'inventaire. Après avoir rempli les champs obligatoires, cliquez sur **Enregistrer le produit**. 

**Remarque :** Si vous n'entrez aucune quantité, par défaut 0 est enregistré et un inventaire avec 0 quantité ne sera pas visible dans les options d'inventaire de la page d'expédition. 

<ImagePopup src="/images/settings/productInventory.png" alt="Product Inventory" /> 

### Paramètres d'inventaire sur la page d'expédition 

Accédez à **Ventes >> Commandes**. Ouvrez la commande sélectionnée dans **Mode Édition >> Facture >> Enregistrer la facture >> Expédier**. 

Dans la **Section Produit commandé**, l'administrateur peut décider à partir de quel inventaire le produit doit être livré. 

<ImagePopup src="/images/settings/inventorySetting.png" alt="Inventory Setting" /> 

**Remarque :** Vous ne pouvez activer qu'un seul inventaire à la fois. Lorsqu'un inventaire est sélectionné, les autres seront automatiquement désactivés. 
Par exemple, si vous sélectionnez **Noida Warehouse**, les autres inventaires seront désactivés. Saisissez la quantité à expédier et cliquez sur **Créer un envoi**. 

Ainsi, en suivant ces étapes, vous pouvez facilement créer et gérer des **Sources d'inventaire** dans ExalandStore.
