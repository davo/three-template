# PRD: [Feature Name]

## Lean Checklist (tick **all** before coding)
- [ ] Solves a pain observed in the last 7 days
- [ ] Delivers value in ≤ 1 session  
- [ ] Adds ≤ 1 new dependency
- [ ] Deletes or simplifies something else

*PRs that leave any box blank must justify why. See [Lean Principles](../LEAN_PRINCIPLES.md).*

## Overview

**Project**: [Brief description of what you're building]
**Timeline**: [Realistic estimate - e.g., "2-3 development sessions"]
**Priority**: [High/Medium/Low]
**Status**: [Planning/In Progress/Completed]
**Multi-Agent Pattern**: [Solo/Design Partner/Implementation Partner/Full Collaboration]

## Problem Statement

[Describe the current situation and what problems it creates]

Current issues:
- **[Problem 1]** - [Description and impact]
- **[Problem 2]** - [Description and impact]
- **[Problem 3]** - [Description and impact]

This creates:
- [Consequence 1]
- [Consequence 2]
- [Consequence 3]

## Vibe-Check Loop
Immediate application of the feature to our own workflow for resonance validation.

**Self-Application Plan**: [How will we immediately use this feature on the vibe-check project itself?]
**Expected Insights**: [What should we learn about the feature's practical value?]

## Curiosity & Discovery Log
Use this area to capture new insights, unexpected opportunities, or alternative approaches discovered during development.

| Date | Discovery / Idea | Action Taken? |
|------|------------------|---------------|
| YYYY‑MM‑DD | _e.g. Found better parsing lib; may reduce latency 20 %_ | Create follow‑up PRD? |

## Proposed Solution

[High-level description of your approach]

**Key Changes**:
1. [Change 1 with rationale]
2. [Change 2 with rationale]
3. [Change 3 with rationale]

## Quick Start: Before/After User Experience

**Before (Current):**
```bash
# Current workflow example
[command examples showing current state]
```

**After (Proposed):**
```bash
# New workflow example
[command examples showing desired state]
```

## Agentic Guard‑Rails

### Token Budget
- **Estimated token usage:** `[approximate count]`  (aim ≤ 70 % of context window)
- If more context is required, compact conversation and note what must be preserved.

### Tool Access Constraints
| Tool | Allowed? | Rationale / Notes |
|------|----------|-------------------|
| Terminal / Bash | ☐ Yes / ☒ No | Prevent destructive file ops during exploration |
| File System Writes | ☐ Yes / ☒ No | Only enable once architecture approved |
| Web Fetch | ☒ Yes | Needed for research phase |

_Agent must request human confirmation to enable a disallowed tool._

### CLAUDE.md Compliance Reminder
**⚠️ IMPORTANT**: All implementation work must comply with the operational protocols defined in `./CLAUDE.md`:

- **Skill-Level Response Matrix** (§8): Adapt tone and code complexity to user expertise level
- **Intent Confirmation Protocol** (§9): For multi-file/≥3-step tasks, provide plan + confirmation
- **Operational Safeguards** (§10): Use required keywords for high-risk actions
- **Verification Protocol** (§13): Use meaningful verification, not superficial checks
- **Token Efficiency Playbook**: Follow token limits and compaction guidelines
- **Session End Protocol** (§17): Suggest `/compact` with specific instructions

_Reference `./CLAUDE.md` for complete operational guidance._

## Claude Code Integration

### Hooks Integration
| Hook Type | Required? | Purpose | Implementation Notes |
|-----------|-----------|---------|---------------------|
| PreToolUse | ☐ Yes / ☒ No | [e.g., Validate file operations, block sensitive paths] | [Configuration details] |
| PostToolUse | ☐ Yes / ☒ No | [e.g., Auto-format code, log operations] | [Configuration details] |
| Notification | ☐ Yes / ☒ No | [e.g., Custom alerts, status updates] | [Configuration details] |
| Stop/SubagentStop | ☐ Yes / ☒ No | [e.g., Cleanup tasks, final validation] | [Configuration details] |

### Memory System Integration
| Memory Type | Location | Purpose | Content Strategy |
|-------------|----------|---------|------------------|
| Project Memory | `./CLAUDE.md` | [Team-shared instructions] | [What to include] |
| User Memory | `~/.claude/CLAUDE.md` | [Personal preferences] | [What to include] |
| Imports | `@path/to/file` | [Additional context files] | [Which files to import] |

### Slash Commands Integration
| Command Type | Scope | Purpose | Implementation |
|--------------|-------|---------|----------------|
| Project Commands | `.claude/commands/` | [Team-shared workflows] | [Command files to create] |
| Personal Commands | `~/.claude/commands/` | [Individual workflows] | [Command files to create] |
| MCP Commands | `/mcp__server__prompt` | [External tool integration] | [MCP server requirements] |

### Workflow Integration
| Workflow Pattern | Applicable? | Implementation Strategy |
|------------------|-------------|------------------------|
| Codebase Understanding | ☐ Yes / ☒ No | [How to leverage Claude's code analysis] |
| Bug Fixing | ☐ Yes / ☒ No | [Error handling and debugging workflows] |
| Refactoring | ☐ Yes / ☒ No | [Code modernization strategies] |
| Testing | ☐ Yes / ☒ No | [Test generation and execution] |
| Documentation | ☐ Yes / ☒ No | [Doc generation and maintenance] |
| Image Analysis | ☐ Yes / ☒ No | [Visual content processing] |
| File References | ☐ Yes / ☒ No | [@path integration strategies] |
| Extended Thinking | ☐ Yes / ☒ No | [Complex reasoning scenarios] |
| Parallel Sessions | ☐ Yes / ☒ No | [Git worktree strategies] |
| Unix Integration | ☐ Yes / ☒ No | [CLI and pipeline integration] |

### Security & Permissions
- **Hook Security**: [Review process for hook configurations]
- **Memory Access**: [What memory files this feature can access]
- **Command Permissions**: [Tool access for custom commands]
- **File System Access**: [Directory and file access patterns]

### Integration Success Metrics
- **[Metric 1]**: [e.g., Hook execution success rate]
- **[Metric 2]**: [e.g., Memory retrieval accuracy]
- **[Metric 3]**: [e.g., Command usage frequency]
- **[Metric 4]**: [e.g., Workflow completion time]

## Success Criteria

### Primary Goals
- [ ] [Goal 1 - specific and measurable]
- [ ] [Goal 2 - specific and measurable]
- [ ] [Goal 3 - specific and measurable]

### Secondary Goals
- [ ] [Optional goal 1]
- [ ] [Optional goal 2]
- [ ] [Optional goal 3]

### Completion Tracking
**Git Tag**: `prd-[feature-name]-v[version]` (e.g., `prd-vibe-pack-v1.0`)
**Completion Hash**: [Git commit hash when PRD marked complete]
**Implementation Branch**: [Feature branch used for development]

## Technical Implementation

### Architecture Changes

**Before:**
```
[Current file/system structure]
```

**After:**
```
[Proposed file/system structure]
```

### Implementation Plan

#### Phase 1: [Phase Name]
1. **[Task 1]** - [Description]
2. **[Task 2]** - [Description]
3. **[Task 3]** - [Description]

#### Phase 2: [Phase Name]
4. **[Task 4]** - [Description]
5. **[Task 5]** - [Description]
6. **[Task 6]** - [Description]

#### Phase 3: [Phase Name]
7. **[Task 7]** - [Description]
8. **[Task 8]** - [Description]
9. **[Task 9]** - [Description]

## Technical Details

### [Component/System Name]
```bash
[command/code examples]
```

### [Another Component/System Name]
```bash
[command/code examples]
```

### Implementation Details

**[Technical Detail 1]:**
```bash
# Implementation approach
[code/config examples]
```

**[Technical Detail 2]:**
```bash
# Implementation approach
[code/config examples]
```

## Risk Assessment

### Technical Risks
- **[Risk 1]** - [Description and likelihood]
- **[Risk 2]** - [Description and likelihood]
- **[Risk 3]** - [Description and likelihood]

### Mitigation Strategies
- **[Mitigation 1]** - [How to address risk 1]
- **[Mitigation 2]** - [How to address risk 2]
- **[Mitigation 3]** - [How to address risk 3]

## Rollback Plan
**Primary Rollback**: [Most likely rollback scenario and steps]
**Alternative Rollbacks**: [Additional rollback scenarios if needed]

## Dependencies

- [Dependency 1]
- [Dependency 2]
- [Dependency 3]

## Testing Strategy

### Manual Testing
- [ ] [Test scenario 1]
- [ ] [Test scenario 2]
- [ ] [Test scenario 3]

### Integration Testing
- [ ] [Integration test 1]
- [ ] [Integration test 2]
- [ ] [Integration test 3]

## Documentation Updates

### Files to Update
- [ ] [File 1] - [What needs updating]
- [ ] [File 2] - [What needs updating]
- [ ] [File 3] - [What needs updating]

### New Documentation
- [ ] [New doc 1] - [Purpose]
- [ ] [New doc 2] - [Purpose]
- [ ] [New doc 3] - [Purpose]

## Success Metrics

### Functional Metrics
- **[Metric 1]**: [Target value and measurement method]
- **[Metric 2]**: [Target value and measurement method]
- **[Metric 3]**: [Target value and measurement method]

### Usability Metrics
- **[Metric 1]**: [Target value and measurement method]
- **[Metric 2]**: [Target value and measurement method]
- **[Metric 3]**: [Target value and measurement method]

### Technical Metrics
- **[Metric 1]**: [Target value and measurement method]
- **[Metric 2]**: [Target value and measurement method]
- **[Metric 3]**: [Target value and measurement method]
- **Task Noise Ratio**: < 10 %  (tasks closed with zero meaningful code change ÷ tasks generated)

## Implementation Notes

[Space for tracking deviations, lessons learned, and implementation details that emerge during development]

## Future Considerations
- [Future enhancement 1]
- [Future enhancement 2]

## Continuous Improvement Prompts
- Link related PRDs in "Dependencies" or within the body for easy cross‑navigation.
- When a new discovery suggests a fork, note it in the Curiosity Log and consider creating a separate PRD.
- Default to suggestions + rationale; generate action items only when explicitly requested ("/make task").

## Session End Protocol
**Compact Instructions**: `/compact [Preserve specific aspects for future sessions]`
**Key Context to Preserve**: [Implementation details, decisions, next steps]

---

**Next Steps**: [What happens after this PRD is approved]

## PRD Template Usage Notes

### When to Use This Template
- Significant feature additions requiring multiple sessions
- System refactoring or architectural changes
- Integration with external systems
- Changes affecting multiple components

### How to Fill Out Each Section
1. **Overview**: Keep timeline realistic, status updated
2. **Problem Statement**: Be specific about current pain points
3. **Claude Code Integration**: Plan how features leverage Claude Code's capabilities
4. **Success Criteria**: Make goals measurable and testable
5. **Implementation Plan**: Break into phases with clear tasks
6. **Risk Assessment**: Consider technical and user impact risks
7. **Testing Strategy**: Plan both manual and automated testing
8. **Success Metrics**: Define how you'll measure success

### Best Practices
- Update status and checkboxes as you progress
- Use specific examples in before/after scenarios
- Keep rollback plans simple and actionable
- Include realistic timelines (usually 2-4 sessions)
- Document deviations in Implementation Notes section
- **Git Tagging**: When PRD moves to completed status, create git tag linking implementation state to requirements

### Claude Code Integration Guidelines
- **Hooks**: Only enable hooks that provide clear value; document security implications
- **Memory**: Specify which memory files are needed and why; avoid over-reliance on imports
- **Commands**: Create commands that follow the project's workflow patterns
- **Workflows**: Choose workflows that align with the feature's complexity and scope
- **Security**: Always review hook configurations and command permissions before implementation
- **Metrics**: Track both technical success (execution rates) and user value (time saved, accuracy)
