# INCIDENT REPORT: [Incident Title]

## Quick Assessment (tick **all** applicable)
- [ ] Data loss occurred
- [ ] Unauthorized changes made  
- [ ] Work required recovery actions
- [ ] Trust protocols were breached
- [ ] Required human intervention

*Any incident leaving boxes blank should document why they don't apply.*

## Incident Overview

**Date**: [YYYY-MM-DD]
**Duration**: [Start time - End time]
**Severity**: [Critical/High/Medium/Low]
**Status**: [Active/Resolved/Under Review]
**Reporter**: [Who first identified the incident]
**Handler**: [Who managed the response]

## Timeline of Events

| Time | Event | Actor | Action Taken |
|------|-------|-------|--------------|
| HH:MM | [Initial trigger/detection] | [User/System/Agent] | [Response] |
| HH:MM | [Escalation/investigation] | [User/System/Agent] | [Response] |
| HH:MM | [Resolution attempt] | [User/System/Agent] | [Response] |
| HH:MM | [Final resolution] | [User/System/Agent] | [Response] |

## Problem Statement

**What Happened**: [Clear description of the incident]

**Impact Assessment**:
- **[Impact Area 1]** - [Description and scope]
- **[Impact Area 2]** - [Description and scope]
- **[Impact Area 3]** - [Description and scope]

**Affected Systems**:
- [System/Component 1]
- [System/Component 2]
- [System/Component 3]

## Root Cause Analysis

### Primary Cause
[Main factor that led to the incident]

### Contributing Factors
1. **[Factor 1]** - [Description and how it contributed]
2. **[Factor 2]** - [Description and how it contributed]
3. **[Factor 3]** - [Description and how it contributed]

### Context & Environment
- **Working Directory State**: [Clean/Dirty/Mixed]
- **Git Branch**: [Branch name and state]
- **Recent Changes**: [What had been modified recently]
- **Agent Mode**: [Operational context/permissions]

## Technical Details

### Initial State
```bash
# Commands showing the state before incident
[git status, file contents, etc.]
```

### Incident Actions
```bash
# Commands or actions that caused the incident
[specific commands, file modifications, etc.]
```

### Final State
```bash
# Commands showing the state after resolution
[git status, verification commands, etc.]
```

## Resolution Actions

### Immediate Response
1. **[Action 1]** - [Description and outcome]
2. **[Action 2]** - [Description and outcome]
3. **[Action 3]** - [Description and outcome]

### Recovery Process
1. **[Recovery Step 1]** - [What was done to restore service]
2. **[Recovery Step 2]** - [What was done to restore service]
3. **[Recovery Step 3]** - [What was done to restore service]

### Verification
- [ ] [Verification check 1]
- [ ] [Verification check 2]
- [ ] [Verification check 3]

## Data Impact

### Lost/Corrupted Data
- [Description of any data loss]
- [Recovery status]

### Preserved Data
- [Description of data that was preserved]
- [Location and access method]

### Recovery Method
```bash
# Commands used to recover data
[specific git commands, file operations, etc.]
```

## Communication

### Internal Notifications
- [Who was notified and when]
- [Communication channels used]

### External Impact
- [Any external parties affected]
- [Communications sent]

## Lessons Learned

### What Went Well
- [Positive aspects of the response]
- [Systems that worked as expected]

### What Could Be Improved
- [Areas for improvement in process]
- [Systems that need enhancement]

### Knowledge Gaps Identified
- [Areas where documentation was lacking]
- [Training needs identified]

## Prevention Measures

### Short-term Actions
- [ ] [Immediate action 1]
- [ ] [Immediate action 2]
- [ ] [Immediate action 3]

### Long-term Improvements
- [ ] [Strategic improvement 1]
- [ ] [Strategic improvement 2]
- [ ] [Strategic improvement 3]

### Protocol Updates
- [ ] [Protocol/procedure to update]
- [ ] [Documentation to modify]
- [ ] [Training to provide]

## Risk Assessment

### Similar Incident Likelihood
**Probability**: [High/Medium/Low]
**Reasoning**: [Why this assessment was made]

### Related Risks
- **[Risk 1]** - [Description and mitigation]
- **[Risk 2]** - [Description and mitigation]
- **[Risk 3]** - [Description and mitigation]

## Documentation Updates Required

### Process Documentation
- [ ] [Document 1] - [Updates needed]
- [ ] [Document 2] - [Updates needed]
- [ ] [Document 3] - [Updates needed]

### Operational Procedures
- [ ] [Procedure 1] - [Changes required]
- [ ] [Procedure 2] - [Changes required]
- [ ] [Procedure 3] - [Changes required]

## Follow-up Actions

### Immediate (Next 24 hours)
- [ ] [Action 1] - [Owner: Name]
- [ ] [Action 2] - [Owner: Name]
- [ ] [Action 3] - [Owner: Name]

### Short-term (Next week)
- [ ] [Action 1] - [Owner: Name]
- [ ] [Action 2] - [Owner: Name]
- [ ] [Action 3] - [Owner: Name]

### Long-term (Next month)
- [ ] [Action 1] - [Owner: Name]
- [ ] [Action 2] - [Owner: Name]
- [ ] [Action 3] - [Owner: Name]

## Related Incidents

### Similar Past Incidents
- [Reference to similar incidents]
- [Links to related reports]

### Pattern Analysis
- [Any patterns emerging across incidents]
- [Systemic issues identified]

## Metrics & Costs

### Time Metrics
- **Detection Time**: [How long to identify]
- **Response Time**: [How long to start response]
- **Resolution Time**: [How long to fully resolve]
- **Recovery Time**: [How long to restore service]

### Resource Impact
- **Human Hours**: [Time spent on incident]
- **System Downtime**: [Duration of service disruption]
- **Data Recovery Effort**: [Time spent recovering]

## Attachments

### Log Files
- [Reference to relevant log files]
- [Commands used to generate logs]

### Screenshots
- [References to relevant screenshots]
- [Before/after comparisons]

### Chat Transcripts
- [References to relevant conversation logs]
- [Key decisions captured in chats]

## Approval & Sign-off

**Incident Handler**: [Name] - [Date]
**Technical Review**: [Name] - [Date]
**Process Review**: [Name] - [Date]

---

## Incident Template Usage Notes

### When to Use This Template
- Any unplanned disruption to normal operations
- Unauthorized changes made by agents or systems
- Data loss or corruption events
- Trust protocol violations
- Security incidents or breaches

### Severity Guidelines
- **Critical**: Data loss, security breach, complete service disruption
- **High**: Unauthorized changes, significant work disruption, partial data loss
- **Medium**: Process violations, minor work disruption, recoverable issues
- **Low**: Minor protocol deviations, easily resolved issues

### Best Practices
- Complete the report within 24 hours of resolution
- Include all relevant technical details and commands
- Focus on facts, not blame
- Identify systemic issues, not just individual mistakes
- Create actionable follow-up items with clear owners
- Link to related documentation and procedures
- Preserve all relevant artifacts (logs, screenshots, commands)

### Template Customization
- Add sections specific to your environment
- Modify severity guidelines to match your context
- Include your standard communication protocols
- Adapt follow-up timelines to your team's cadence
- Add metrics that matter to your organization