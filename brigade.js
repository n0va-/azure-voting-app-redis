function kubeJobRunner (config, k) {
    k.storage.enabled = false
    k.image = "lachlanevenson/k8s-kubectl:v1.8.2"
    k.tasks = [
        `kubectl set image deployment/vote-deploy vote-web-cntnr=nataliedocker.azurecr.io/azureworkshop/azure-vote-front:${config.get("imageTag")}`
    ]
}
