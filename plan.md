# 📦 Datadog Software Delivery Suite - Starter Project Plan

## 🌟 Objective

Enable CI pipeline visibility, test performance tracking, deployment observability, and DORA metrics with Datadog — all within one sprint and with minimal configuration.

---

## ✅ Prerequisites

* Datadog account and API key
* GitHub repository with:

  * CI pipeline (e.g., GitHub Actions)
  * Automated test suite (unit, integration, or E2E)
* Optional: Access to deployment tooling (e.g., CD step or deployment script)

---

## 🗸️ Project Milestones

| Milestone                          | Owner       | Due Date | Status        |
| ---------------------------------- | ----------- | -------- | ------------- |
| Enable CI Visibility               | DevOps / SE | T+1 day  | ⬜ Not Started |
| Enable Test Visibility             | DevOps / QA | T+2 days | ⬜ Not Started |
| Enable Deployment Tracking         | DevOps      | T+3 days | ⬜ Not Started |
| Verify DORA Metrics are Populating | DevOps / SE | T+5 days | ⬜ Not Started |
| Add Quality Gates (optional)       | QA / DevOps | T+7 days | ⬜ Not Started |

---

## 🛠️ Setup Steps

### 1. CI Visibility

* **Docs**: [https://docs.datadoghq.com/continuous\_integration/](https://docs.datadoghq.com/continuous_integration/)
* **GitHub Actions Example**:

```yaml
- name: Run tests with Datadog instrumentation
  run: |
    pip install dd-trace
    dd-trace-ci run pytest
  env:
    DD_API_KEY: ${{ secrets.DD_API_KEY }}
    DD_ENV: staging
    DD_SERVICE: my-app
    DD_SITE: datadoghq.com
```

---

### 2. Test Visibility

* **Docs**: [https://docs.datadoghq.com/tests/](https://docs.datadoghq.com/tests/)
* **Enable Test Instrumentation**:

```bash
pip install dd-trace
DD_ENV=staging DD_SERVICE=my-app dd-trace-ci run pytest
```

---

### 3. Deployment Tracking

* **Docs**: [https://docs.datadoghq.com/continuous\_delivery/](https://docs.datadoghq.com/continuous_delivery/)
* **Via `datadog-ci`**:

```bash
npx datadog-ci deploy notify \
  --env=staging \
  --service=my-app \
  --version=1.0
```

* **OR via API**:

```bash
curl -X POST "https://api.datadoghq.com/api/v1/events" \
-H "DD-API-KEY: $DD_API_KEY" \
-d '{
  "title": "Deploy my-app v1.0",
  "text": "Deployed to staging",
  "tags": ["service:my-app", "env:staging"],
  "alert_type": "info"
}'
```

---

### 4. DORA Metrics

* **Docs**: [https://docs.datadoghq.com/dora\_metrics/](https://docs.datadoghq.com/dora_metrics/)
* **Automatically calculated once build/test/deploy data is flowing**

---

### 5. Quality Gates (Optional)

* **Docs**: [https://docs.datadoghq.com/quality\_gates/?tab=tests](https://docs.datadoghq.com/quality_gates/?tab=tests)
* **Add to CI**:

```yaml
- name: Enforce Datadog quality gate
  run: npx datadog-ci gate test --fail-on-flaky
```

---

## 📊 Success Criteria

| Metric                       | Target       |
| ---------------------------- | ------------ |
| CI build coverage in Datadog | 100%         |
| Test suite insights visible  | Yes          |
| Deployment markers tracked   | Yes          |
| DORA metrics dashboard       | Enabled      |
| Quality gate enforcement     | Optional/Yes |

---

## 🧠 Notes

* Tag services consistently: `service:my-app`, `env:staging`
* Use the same tags across CI, test, and deployment steps for correlation
* You can expand into APM, RUM, or Session Replay as next steps
