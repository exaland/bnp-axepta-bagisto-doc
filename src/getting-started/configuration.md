
# Configuration

Connectez-vous à l'administration de Bagisto puis ouvrez :

**Configuration → Ventes → Moyens de paiement → Axepta BNP Paribas**

Vous pourrez configurer les paramètres suivants.

## Activer

Permet d'activer ou désactiver le moyen de paiement.

## Mode Sandbox

Active le mode de test fourni par BNP Paribas.

Lorsque ce mode est activé, les paiements sont envoyés vers la plateforme de démonstration Axepta.

## Merchant ID

Saisissez votre identifiant marchand fourni par BNP Paribas.

Exemple :

```
BNP_DEMO_AXEPTA
```

ou votre Merchant ID de production.

## Clé HMAC

Saisissez la clé HMAC communiquée par BNP Paribas.

Cette clé est utilisée pour signer toutes les requêtes envoyées à Axepta.

## Clé Blowfish

Saisissez la clé Blowfish communiquée par BNP Paribas.

Cette clé est utilisée pour chiffrer les données de paiement avant leur envoi.

## URL Sandbox

URL de test :

```
https://paymentpage.axepta.bnpparibas/payssl.aspx
```

## URL Production

URL de production :

```
https://paymentpage.axepta.bnpparibas/payssl.aspx
```

---