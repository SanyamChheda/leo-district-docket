const fs=require('fs');
const p='src/app/docket/[slug]/page.tsx';
let s=fs.readFileSync(p,'utf8');
const startToken='const cmoMembers = docket.teamMembers.filter(';
let start=s.indexOf(startToken);
if(start===-1){console.error('start not found'); process.exit(1);} 
const endMarker='\n              })()}'
let end=s.indexOf(endMarker,start);
if(end===-1){console.error('end not found'); process.exit(1);} 
const before=s.slice(0,start);
const after=s.slice(end+endMarker.length);
const replacement = const primaryLabels = ['district secretary', 'secretary', 'chief', 'chair', 'president']

                const primaryMembers = docket.teamMembers.filter((member) =>
                  primaryLabels.some((label) => member.districtPosition.toLowerCase().includes(label))
                )

                const coordinatorMembers = docket.teamMembers.filter((member) =>
                  member.districtPosition.toLowerCase().includes('co-ordinator') ||
                  member.districtPosition.toLowerCase().includes('coordinator')
                )

                const otherMembers = docket.teamMembers.filter(
                  (member) => !primaryMembers.includes(member) && !coordinatorMembers.includes(member)
                )

                return (
                  <>
                    {primaryMembers.length > 0 && (
                      <div className= mt-8 grid justify-items-center>
                        {primaryMembers.map((member) => (
                          <div key={member.name} className=w-full max-w-xs>
                            <TeamCard member={member} />
                          </div>
                        ))}
                      </div>
                    )}

                    {coordinatorMembers.length > 0 ; (
                      <div className=mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3 justify-items-center>
                        {coordinatorMembers.map((member) => (
                          <div key={member.name} className=w-full max-w-sm>
                            <TeamCard member={member} />
                          </div>
                        ))}
                      </div>
                    )}

                    {otherMembers.length > 0 ; (
                      <div className=mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3 justify-items-center>
                        {otherMembers.map((member) => (
                          <div key={member.name} className=w-full max-w-sm>
                            <TeamCard member={member} />
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                );
const newS = before + replacement + after;
fs.writeFileSync(p,newS,'utf8');
console.log('patched');
