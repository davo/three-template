# Operational Template: [Experiment Name]

**Date**: YYYY-MM-DD
**Status**: [Proposed / Active / Completed / Archived]
**Owner**: [Agent/Human Name]

## 1. Hypothesis

[A clear statement about what this experiment is trying to prove. It should connect a specific configuration to an expected outcome.]

**Example:**
> "Enforcing a strict token budget and a low temperature (0.1) for well-defined bug-fix tasks will result in a higher task success rate (>95%) and a lower average token cost per task, without significantly increasing the number of interaction turns."

## 2. Configuration

[This section defines the specific "recipe" for the agent's behavior during the experiment.]

| Parameter | Setting | Rationale |
|---|---|---|
| **Target Task Type** | `[e.g., Bug-Fix, New Feature, Refactoring]` | [Why this configuration is suited for this task type] |
| **Token Limit (Max)** | `[e.g., 2048]` | [Reason for the limit] |
| **Temperature** | `[e.g., 0.1]` | [Reason for the temperature setting] |
| **Tool Access** | `[e.g., Read-only, Full Access, No File System]` | [Reason for the tool constraints] |
| **Enforced Protocols** | `[List of protocols from GEMINI.md/CLAUDE.md]` | [Why these protocols are critical for this experiment] |
| **Discouraged Behaviors**| `[e.g., Proactive refactoring, excessive task generation]`| [What the agent should avoid doing] |

## 3. Target Metrics (from Observability PRD)

[List the primary metrics from the Observability system that will be used to evaluate this experiment.]

- **Primary Metric**: `[e.g., Task Completion Status]`
- **Secondary Metric**: `[e.g., Total Cost USD]`
- **Balancing Metric**: `[e.g., Number of Interaction Turns]`
- **Other Metrics**:
    - `Token Usage (Input/Output)`
    - `Task Noise Ratio`
    - `Tool Usage Frequency`

## 4. Success Criteria

[Define the specific, measurable outcomes that will determine if the hypothesis was correct.]

- **Quantitative Criteria**:
    - `[Metric Name]` must be `[Operator]` `[Value]` (e.g., `Task Success Rate` must be `> 95%`).
    - `[Metric Name]` must be `[Operator]` `[Value]` (e.g., `Average Token Cost` must be `< $0.05`).
- **Qualitative Criteria**:
    - `[e.g., User feedback indicates the agent's responses felt more focused and direct.]`
    - `[e.g., The number of course-corrections required was noticeably lower than baseline.]`

## 5. Experiment Log

[A running log to track the progress and results of applying this template.]

| Session ID / Date | Task Description | Outcome & Notes | Success? |
|---|---|---|---|
| `[UUID]` | `[e.g., Fix bug in pack_command.py]` | `[Completed successfully in 3 turns. Low token usage.]` | ✅ |
| `[UUID]` | `[e.g., Refactor agent.py]` | `[Agent struggled with constraints, required clarification.]` | ❌ |

## 6. Analysis & Conclusion

[To be filled out upon completion of the experiment.]

**Summary of Results**:
- [Brief summary of the findings from the experiment log.]

**Conclusion**:
- [Was the hypothesis validated? Why or why not?]

**Next Steps**:
- [e.g., "Promote this template to a standard operating procedure for bug-fixes."]
- [e.g., "Archive this template; the constraints were too restrictive."]
- [e.g., "Propose a new experiment (v2) with a slightly higher token limit."]
